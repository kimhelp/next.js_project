import Link from 'next/link'
import Feed from './feed/list'

const Index = () => {
    return(
        <>
            -------------메인페이지------------ <br />
            피드 넣어야함
            <Link href="/feed/list"><Feed /></Link>
        </>
    )
}

export default Index