import Nav from "@/components/Nav";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const bag = () => {
  const list = [
    {
      img: "shoes9.jpg",
      price: "680",
    },
    {
      img: "shoes2.jpg",
      price: "620",
    },
    {
      img: "shoes3.jpg",
      price: "1200",
    },
    {
      img: "shoes4.jpg",
      price: "1250",
    },
    {
      img: "shoes10.jpg",
      price: "749",
    },
    {
      img: "shoes6.jpg",
      price: "900",
    },
    {
      img: "shoes7.jpg",
      price: "1039",
    },
    {
      img: "shoes8.jpg",
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
                <a href="/shoe">
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
