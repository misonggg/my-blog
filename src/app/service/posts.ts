// import { getAllPosts } from '@/app/service/posts';
import { metadata } from './../layout';
import { promises as fs, read, readFile } from "fs";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

// 기존의 Post타입과 content타입을 인털섹션을 할 수 있음 (PostData = Post + content)
export type PostData = Post & {content: string; next: Post | null; prev: Post | null};

// getAllPosts해서 featured된 포스트를 가져옴
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then(posts => posts.filter((post) => post.featured))
}

// export const getAllPosts = caches(async ()=> {
//   const filePath = path.join(process.cwd(), "data", "posts.json");
//   return readFile(filePath, 'utf-8')
//     .then<Post[]>(JSON.parse)
//     .then((post)=> posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
// })

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  const posts = JSON.parse(data) as Post[];
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// getFeatured의 반대 포스트만 가져옴 (하단 캐러셀 영역 위해)
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then(posts => posts.filter((post) => !post.featured))
}

// 실제 경로를 이용하여 Post를 누르면 보여주기 위해 md파일을 읽어옴 - 포스트데이터 반환
// 인덱스를 이용해서 이전 포스트 , 다음 포스트로 넘어가게 함
export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`)
  const posts = await getAllPosts()
  const post = posts.find((post)=> post.path === fileName)
    
  if(!post) 
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`)

  const index = posts.indexOf(post);
  const next = index >0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await fs.readFile(filePath, 'utf-8')
  return {...post, content, next, prev}
}
// 이 코드는 getPostData라는 비동기 함수를 정의하고 있습니다. 이 함수는 fileName이라는 매개변수를 받아서 해당 파일에 대한 포스트 데이터를 반환합니다.

// 함수의 동작은 다음과 같습니다:

// filePath 변수를 생성하여 지정된 fileName을 기반으로 포스트 파일의 경로를 설정합니다.
// getAllPosts 함수를 호출하여 모든 포스트의 배열을 가져옵니다.
// posts 배열에서 path 속성이 fileName과 일치하는 포스트를 찾습니다.
// 포스트를 찾지 못하면 에러를 throw하고, 해당 파일명으로 포스트를 찾을 수 없음을 알립니다.
// posts 배열에서 현재 포스트의 인덱스를 찾습니다.
// 인덱스를 기반으로 이전 포스트와 다음 포스트를 결정합니다.
// index > 0인 경우, posts[index - 1]은 이전 포스트를 나타냅니다.
// index < posts.length - 1인 경우, posts[index + 1]은 다음 포스트를 나타냅니다.
// fs.readFile을 사용하여 파일을 비동기적으로 읽고, 파일의 내용을 content 변수에 저장합니다.
// 포스트의 속성과 content, next, prev 값을 포함하는 객체를 반환합니다.
// 즉, 이 함수는 주어진 fileName에 해당하는 포스트의 데이터를 읽어와서 포스트 객체와 함께 반환합니다. 
// 이를 통해 포스트의 제목, 경로, 카테고리 등의 정보뿐만 아니라 포스트의 내용과 이전/다음 포스트의 정보도 사용할 수 있게 됩니다.