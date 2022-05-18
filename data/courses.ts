import { Course } from '@/types/course';

const courses: Course[] = [
  /* Adding New Course Checklist:
   * - Create new form on convertkit.com
   * - Obtain formId
   * - Write title & description
   * - No URL
   * - live: false
   * - progress: 0
   */
  {
    id: 'the-beginners-guide-to-nextjs',
    title: 'Fundamental Next.js API and Patterns',
    url: 'https://egghead.io/courses/fundamental-next-js-api-and-patterns-a6a7509f',
    description:
      "In this course, you will learn about Next.js's features, like data fetching, page rendering, dynamic routes, API routes, and how to deploy your Next.js project on Vercel.",
    live: true,
    image: '/assets/images/nextjs-course.png',
  },
  {
    id: 'build-modern-user-interface-with-chakra-ui',
    title: 'Build a Modern User Interface with Chakra UI ⚡️',
    url: 'https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106',
    description:
      "In this course, you will learn how to create a flexible user interface using Chakra UI. You will learn to use Chakra UI's default style props and components to easily build out your application, but you will also see how you can easily override the defaults or even create custom components to suit the needs of your application.",
    live: true,
    image: '/assets/images/chakra-course.png',
  },
];

export default courses;
