
import spinner from './spinner.gif';

export const Loader = () => {
    return (
        <div className="Loader">
            <img src={spinner} alt="loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}
