'use client'
import React, { useEffect, useState } from 'react'
import ContentHeader from '../_components/ContentHeader'
import StatisticCard from './_components/StatisticCard'
import { getAllPost } from '../actions/getPosts'
import { Post } from '@/types'
import { useUser } from '@clerk/nextjs'
import StatisticChart from './_components/StatisticChart'
import StatisticsTable from './_components/StatisticTable'


const DashboardPage = () => {

  const [postList, setPostList] = useState<Post[]>([]);

  const { isSignedIn } = useUser();


  useEffect(() => {
    const getPosts = async () => {
      const result = await getAllPost();
      if (result) {
        setPostList(result as Post[]);
      }
    };
    getPosts();
  }, []);

  if (!isSignedIn) return null;

  const postCats = postList.map((post) => post.category);
  const postTags = postList.map((post) => post.tags);

  const uniCats = postCats
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  const uniTags = postTags
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div>
      <div className='flex flex-col'>
        <ContentHeader leftsideTitle='Quản trị' rightsideTitle='bài viết'
        />
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {/* {Statistic card} */}
        <StatisticCard title={'Bài viết xuất bản'}
          value={postList.filter((post) => post.status === 'publish').length}
          color='bg-myPrimaryBlue'
          secondaryColor='text-myPrimaryBlue'
        />
        <StatisticCard title={'Danh mục'}
          value={uniCats.length}
          color='bg-myPrimaryRed'
          secondaryColor='text-myPrimaryRed'
        />
        <StatisticCard title={'Chủ đề'}
          value={uniTags.length}
          color='bg-myPrimaryYellow'
          secondaryColor='text-myPrimaryYellow'
        />
        <StatisticCard title={'Bài viết nháp'}
          value={postList.filter((post) => post.status === 'draft').length}
          color='bg-myPrimaryGreen'
          secondaryColor='text-myPrimaryGreen'
        />
      </div>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* {Chart} */}
        <div className='border-2 shadow-lg lg:col-span-2 p-10 rounded-xl'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-bold'>Tổng quan</h1>
            <h1 className='text-2xl font-bold'>
              Bài viết xuất bản: {''}
              <strong className='text-4xl text-myPrimaryBlue'>
                {postList.filter((post) => post.status === 'publish').length}
              </strong>
            </h1>
          </div>
          <StatisticChart posts={postList} />
        </div>

        {/* {Table} */}
        <div className='border-2 shadow-sm lg:col-span-1 rounded-xl p-10'>
          <h1 className='text-2xl font-bold '>
            Thống kê bài viết theo danh mục
          </h1>
          <div className='mt-10'>
          <StatisticsTable posts={postList} cats={uniCats} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage