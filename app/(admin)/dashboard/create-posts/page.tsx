"use client";

import uuid4 from 'uuid4';
import MdEditor from 'react-markdown-editor-lite';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import ContentHeader from '../../_components/ContentHeader';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AccountTagsItems, CategoryItems, FinanceTagsItems, ITTagsItems, StatusItems } from "@/constants";
import Image from "next/image";
import { CirclePlus } from "lucide-react";
import MarkdownDisplay from '@/app/_components/MarkdownDisplay';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { storage } from '@/configs/firebaseConfig';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { createPost } from '../../actions/createPost';



const CreatePostPage = () => {

    const router = useRouter();
    const { user } = useUser();
    const [selectedFile, setSelectedFile] = useState<string>();
    const [loading, setLoading] = useState(false);

    const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (e.target.files) {
        //     // Upload image to firebase storage and download url
        //     const file = e.target.files[0];
        //     const fileName = Date.now() + '.png';
        //     const storageRef = ref(storage, 'htshun-blog-app/' + fileName);

        //     await uploadBytes(storageRef, file)
        //         .then((snapshot) => {
        //             console.log('Uploaded a blob or file!', snapshot);
        //         })
        //         .then(() => {
        //             getDownloadURL(storageRef).then(async (downloadUrl) => {
        //                 setSelectedFile(downloadUrl);
        //             });
        //         });
        // }

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
    
            reader.onloadend = async () => {
                const base64 = reader.result as string;
                if (!base64) {
                    console.error('Error reading file');
                    return;
                }
    
                try {
                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ file: base64 }), // Gửi chuỗi Base64 lên API
                    });
    
                    if (response.ok) {
                        const data = await response.json();
                        setSelectedFile(data.url); // Lưu URL từ Cloudinary
                    } else {
                        console.error('Upload failed:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            };
    
            reader.readAsDataURL(file); // Đọc file và chuyển thành Base64
        } else {
            console.error('No file selected');
        }
    };

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            slug: "",
            description: "",
            category: "",
            content: "",
            thumbnail: "",
            tags: "",
            status: "",
        },
    })

    const onSubmit = async (userInput: z.infer<typeof FormSchema>) => {
        setLoading(true);
        if (!user) return;
        const id = uuid4();

        const createdBy = user?.primaryEmailAddress?.emailAddress;
        const userName = user?.fullName;
        const userProfileImage = user?.imageUrl;
        const thumbnail = selectedFile ? selectedFile : '/placeholder.png';

        await createPost({
            ...userInput,
            postId: id,
            createdBy,
            userName,
            userProfileImage,
            thumbnail,
        });

        setLoading(false);
        router.push('/dashboard');
    }

    return (
        <div className='flex flex-col'>
            <ContentHeader leftsideTitle='Tạo' rightsideTitle='bài viết mới'
            />
            {/* Form */}
            <div className="mt-5 rounded-lg p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Tiêu đề</FormLabel>
                                    <FormControl className="text-lg p-5">
                                        <Input
                                            placeholder="Nhập tiêu đề bài viết ngắn gọn"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Slug */}
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Slug</FormLabel>
                                    <FormControl className="text-lg p-5">
                                        <Input
                                            placeholder="Nhập slug bài viết ngắn gọn"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Mô tả</FormLabel>
                                    <FormControl className="text-lg p-5 min-h-40">
                                        <Textarea
                                            placeholder="Nhập mô tả bài viết ngắn gọn"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Category */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Danh mục</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl className="text-lg p-5">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Chọn danh mục bài biết" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {CategoryItems.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Tags */}
                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Chủ đề</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl className="text-lg p-5">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Chọn chủ đề bài biết" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>IT</SelectLabel>
                                                {ITTagsItems.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Kế toán</SelectLabel>
                                                {AccountTagsItems.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Tài chính</SelectLabel>
                                                {FinanceTagsItems.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Ảnh đại diện/Thumbnail */}

                        <FormField
                            control={form.control}
                            name="thumbnail"
                            render={({ }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Ảnh đại diện</FormLabel>
                                    <FormControl>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="upload-image"
                                                className="flex flex-col hover:cursor-pointer"
                                            >
                                                <div className=" w-[300px] items-center justify-center">
                                                    <Image
                                                        src={
                                                            selectedFile ? selectedFile : '/placeholder.png'
                                                        }
                                                        alt="thumbnail"
                                                        height={300}
                                                        width={300}
                                                        className="w-full object-cover rounded-lg"
                                                    />
                                                </div>
                                                <div className="flex mt-5">
                                                    <CirclePlus className="mr-2 font-bold" />
                                                    <h2 className="font-bold text-lg">
                                                        {selectedFile
                                                            ? 'Thay đổi ảnh đại diện'
                                                            : 'Tải lên ảnh đại diện'}
                                                    </h2>
                                                </div>
                                            </label>
                                            <input
                                                type="file"
                                                id="upload-image"
                                                className="opacity-0"
                                                onChange={onFileSelected}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Content */}
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Nội dung bài viết</FormLabel>

                                    <FormControl className="text-lg p-5">
                                        <MdEditor
                                            value={field.value}
                                            onChange={({ text }) => field.onChange(text)}
                                            style={{ height: '500px', fontSize: '1em' }}
                                            renderHTML={(text) => (
                                                <MarkdownDisplay>{text}</MarkdownDisplay>
                                            )}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Status */}
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Trạng thái bài viết</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl className="text-lg p-5">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Chọn trạng thái bài biết" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {StatusItems.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit"
                            className='text-lg p-6 text-white bg-myPrimaryBlue hover:bg-myPrimaryBlue/80'
                            disabled={loading}>
                           Lưu bài viết</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreatePostPage;