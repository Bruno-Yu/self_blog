import { Navbar } from "flowbite-react";
import routes from '../routes.ts';

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
        { routes.map((nav)=>(<Navbar.Link href={nav.path} key={nav.name} >
          {nav.title}
        </Navbar.Link>)) }
      </Navbar.Collapse>
    </Navbar>
  );
}