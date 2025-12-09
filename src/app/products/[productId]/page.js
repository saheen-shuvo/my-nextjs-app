const DynamicPage = async ({ params }) => {
  const {productId} = await params;
  console.log(productId);
  return (
    <div>
      <h1>Dynamic Product Page {productId}</h1>
    </div>
  );
};

export default DynamicPage;
