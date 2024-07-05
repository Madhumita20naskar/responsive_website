import Nav from "@/components/Nav";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const watch = () => {
  const list = [
    {
      img: "w1.jpg",
      price: "680",
    },
    {
      img: "w2.jpg",
      price: "720",
    },
    {
      img: "w3.jpg",
      price: "1500",
    },
    {
      img: "w4.jpg",
      price: "1250",
    },
    {
      img: "w5.jpg",
      price: "999",
    },
    {
      img: "w6.jpg",
      price: "1300",
    },
    {
      img: "w7.jpg",
      price: "1099",
    },
    {
      img: "w8.jpg",
      price: "1299",
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

export default watch;
