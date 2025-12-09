const DynamicPage = async ({ params, searchParams }) => {
  const {productId} = await params;
  const {category} = await searchParams;
  console.log(productId);
  console.log(category);
  return (
    <div>
      <h1>Dynamic Product Page {productId}</h1>
    </div>
  );
};

export default DynamicPage;
