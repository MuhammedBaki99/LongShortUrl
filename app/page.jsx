import { createClient } from "@/utils/supabase/server";
import ShortUrlForm from "./form";

export default async function Home() {

  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('urls')
    .select('*')
    .eq("user_id", userdata.user?.id);

  console.log(data);
  console.log(userdata);

  return (
    <div>
      {data?.map((x, i) => <p key={i}>{x.shorturl}</p>)}
      <h1>Linkini kısalt hayatı uzat</h1>
      <ShortUrlForm />
    </div>
  );
}
