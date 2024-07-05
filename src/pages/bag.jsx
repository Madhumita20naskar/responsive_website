import Nav from "@/components/Nav";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const bag = () => {
  const list = [
    {
      img: "bag9.jpg",
      price: "680",
    },
    {
      img: "bag2.jpg",
      price: "620",
    },
    {
      img: "bag3.jpg",
      price: "1200",
    },
    {
      img: "bag4.jpg",
      price: "1250",
    },
    {
      img: "bag10.jpg",
      price: "749",
    },
    {
      img: "bag6.jpg",
      price: "900",
    },
    {
      img: "bag7.jpg",
      price: "1039",
    },
    {
      img: "bag8.jpg",
      price: "1799",
    },
  ];
  return (
    <>
      <Nav />
      <div className="h-screen bg-sky-100 pt-1">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 place-content-center">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[230px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <a href="/bag">
                  <b className="">add to cart</b>
                </a>

                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default bag;
