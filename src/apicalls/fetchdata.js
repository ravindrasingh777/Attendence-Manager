export const dynamic = "force-dynamic";
const fetchuserdata = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseUrl}/api/user`, {
    method: "GET",
  });
  return response;
};

export default fetchuserdata;
