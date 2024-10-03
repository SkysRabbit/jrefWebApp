export default function LinksCreateHtmlForm() {

   return (
      <>
         <form action="/api/links" method="POST">
            <input type="text" name="url" defaultValue={"https://apple.com"} placeholder="Your url to shorten" />
            <button type="submit">Shorten</button>
         </form>
      </>
   )
}