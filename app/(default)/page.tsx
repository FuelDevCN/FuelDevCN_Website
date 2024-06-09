/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2024-06-06 18:37:22
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-06-10 00:49:52
 * @FilePath: /FuelCN/app/(default)/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

// import Hero from '@/components/hero'
// import Features from '@/components/features'
// import FeaturesBlocks from '@/components/features-blocks'
// import Testimonials from '@/components/testimonials'
// import Newsletter from '@/components/newsletter'
import Articallist from '@/components/articleList'

export default function Home() {
  return (
    <>
      <Articallist />
    </>
  )
}
