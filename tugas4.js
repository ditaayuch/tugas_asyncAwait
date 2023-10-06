const titlePosts = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url)
        const result=await res.json();
        result.map((item)=>{
            console.log(item.title);
        })
        // console.log(result);
    } catch (error) {
        console.log(error);
    }
}

titlePosts();