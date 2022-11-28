const useFetch = (initialUrl: string) => {
    const [url, setUrl] = useState(initialUrl);
    const [value, setValue] = useState('');

    const fetchData = () => axios.get(url).then(({ data }) => setValue(data));

    useEffect(() => {
        fetchData();
    }, [url]);

    return [value];
};

export default useFetch;