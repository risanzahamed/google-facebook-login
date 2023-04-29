import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div><h2>Hello World</h2>
    </div>
  )
}

// import this
// import { useAuth } from '../context/AuthContext'
// import { useRouter } from 'next/router'



// Use This in Navber function
// const { user, logout } = useAuth()
//   const router = useRouter()



// This is use in Logout Button
// onClick={() => {
//   logout()
//   router.push('/login')
// }}
