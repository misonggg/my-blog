import { sendEmail } from '@/app/service/email';
import * as yup from 'yup'

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})

export async function POST(request: Request) {
  const body = await request.json()
  if(!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({message: '메일 전송에 실패했습니다.'}), {status: 400})
  }
  return sendEmail(body)
    .then(
      ()=> 
        new Response(JSON.stringify({message: '메일을 성공적으로 보냈습니다.'}), {
          status: 200 
        })
    ).catch(error=> {
      console.log(error);
      return new Response(JSON.stringify({message: '메일 전송에 실패했습니다.'}), {
        status: 500,
      })
    })
  }