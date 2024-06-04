import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies });
const getDetailesson = async (id: number) => {
  const { data: lesson } = await supabase
    .from("lesson")
    .select("*")
    .eq("id", id)
    .single();
  return lesson;
};

const LessonDetailPage = async ({ params }: { params: { id: number } }) => {
  const lesson = await getDetailesson(params.id);

  return <div>LessonDetailPage</div>;
};

export default LessonDetailPage;
