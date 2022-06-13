import Navbar from '../../components/Navbar/Navbar'

export default function Container({ children }) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
