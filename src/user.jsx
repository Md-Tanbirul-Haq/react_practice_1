import { use } from "react"

export default function User({ user_fetch }) {

    const user_ = use(user_fetch)
    console.log(user_)
    return (
        <>
            <div className="user_">
                <div className="user">
                    <h1>User : {user_.length}</h1>
                </div>
            </div>
        </>
    )
}