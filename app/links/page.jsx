import { createClient } from "@/utils/supabase/server"; 
import Svgfiles from "../svgfiles/page";
import "./links.css"

export default async function Links() {

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
      {data?.map((x, i) => 
      <div className="urlItem" key={i}>
          <Svgfiles />
          <div className="links">
            <h3>{x.shorturl}</h3>
            <p>{x.longurl}</p>
          </div>
          <button>Kopyala</button>
        </div>)}
    </div>
  );
}