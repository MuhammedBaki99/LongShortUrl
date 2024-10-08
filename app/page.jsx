import { createClient } from "@/utils/supabase/server";
import ShortUrlForm from "./shortform/form";

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
      <ShortUrlForm />
      {data?.map((x, i) => <p key={i}>{x.shorturl}</p>)}
    </div>
  );
}
