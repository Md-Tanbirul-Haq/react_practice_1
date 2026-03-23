
import { useState } from "react"
export default function Cricket_runs() {

    const [runs, setRuns] = useState(0)
    const One_run = () => {

        const run_ = runs + 1
        setRuns(run_)
    }
    const two_run = () => {

        const run_ = runs + 2
        setRuns(run_)
    }
    const three_run = () => {

        const run_ = runs + 3
        setRuns(run_)
    }
    return (
        <div className="add_">
            <h1><u>Cricket Game</u></h1>
            <h1>Total Run : {runs}</h1>
            <div>

                {
                    runs >= 50 && <h3>Congratulations.Total Run 50 .</h3>

                }
                {
                    runs >= 100 && <h3>Congratulations.Total Run 100 .</h3>
                }
            </div>

            <div className="runs" >
                <button onClick={One_run} >One</button>
                <button onClick={two_run}>Two</button>
                <button onClick={three_run}>Three</button>
                <button onClick={() => setRuns(runs + 4)}>Four</button>
                <button onClick={() => setRuns(runs + 6)}>Six</button>
            </div>
        </div>
    )
}