import { Button, Navbar } from "flowbite-react";

const navData =[
    {
        title: '首頁',
        link: '/'
    },
    {
        title: '作品集',
        link: '/works'
    },
    {
        title: '服務項目',
        link: '#'
    },
    {
        title: '部落格',
        link: '#'
    },
    {
        title: '聯絡我',
        link: '#'
    },
]

export default function () {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <span className=" whitespace-nowrap text-xl font-semibold dark:text-white">Bruno</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        { navData.map((nav)=>(<Navbar.Link href={nav.link} key={nav.title} >
          {nav.title}
        </Navbar.Link>)) }
      </Navbar.Collapse>
    </Navbar>
  );
}