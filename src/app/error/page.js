async function getData() {
   // 1 endpoin - API?
   const endpoint = "http://localhosts:3000/api/posts"
   const res = await fetch(endpoint); // http GET

   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }
   return res.json();
}


export default async function BlogPage() {
   const data = await getData();
   const items = data && data.items ? [...data.items] : []
   return (
      <main>
         <h1>Hello World</h1>
         <p>Posts</p>
         {data && items.map((item, idx) => {
            return <li key={`post-${idx}`}>{item.title}</li>
         })}
      </main>
   )
}