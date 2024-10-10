"use client"
import { createClient } from "@/utils/supabase/client";
import Svgfiles from "../svgfiles/page";
import "./links.css"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Links() {
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);

  const supabase = createClient();
  useEffect(() => {
    async function getData() {
      const { data: userdata, error: usererror } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from('urls')
        .select('*')
        .eq("user_id", userdata.user?.id);
      setData(data);
    }
    getData();
    async function getAllData() {
      const { data: userdata, error: usererror } = await supabase.auth.getUser();
      const { data: alldata, error: allerror } = await supabase
        .from('urls')
        .select('*');
      setAllData(alldata);
    }
    getAllData();
  }, [data, alldata]);

 
  return (
    <div className="urlCont">
      {!alldata?.user_id ? alldata?.map((x, i) =>
        <div className="urlItem" key={i}>
          <Svgfiles />
          <div className="links">
            <Link href={x.longurl} >{x.shorturl}</Link>
            <p>{x.longurl}</p>
          </div>
          <button>Kopyala</button>
        </div>) : ""}
      {alldata?.user_id ? data?.map((x, i) =>
        <div className="urlItem" key={i}>
          <Svgfiles />
          <div className="links">
            <Link href={x.longurl} >{x.shorturl}</Link>
            <p>{x.longurl}</p>
          </div>
          <button>Kopyala</button>
        </div>) : ""}
    </div>
  );
}