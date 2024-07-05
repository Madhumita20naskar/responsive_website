import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <div className=" sm:h-auto md:h-screen lg:h-screen bg-sky-100">
        <div className="text-3xl font-bold text-center pt-5">Categories</div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  place-items-center mt-12">
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[240px]"
                src="w1.jpg"
              />
            </CardBody>
            <CardFooter className=" justify-center cursor-pointer text-xl">
              <a href="/watch">
                <b>Watch</b>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[240px]"
                src="bag4.jpg"
              />
            </CardBody>
            <CardFooter className=" justify-center cursor-pointer text-xl">
              <a href="/bag">
                <b>Bag</b>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[240px]"
                src="shoes1.jpg"
              />
            </CardBody>
            <CardFooter className=" justify-center cursor-pointer text-xl">
              <a href="/shoe">
                <b>Shoe</b>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
