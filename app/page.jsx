import Links from "./links/page";
import ShortUrlForm from "./shortform/form";

export default async function Home() {
 

  return (
    <div>
      <ShortUrlForm />
      <Links />
    </div>
  );
}
