export default function Footer() {

    const year = new Date().getFullYear();

    return (
      <>
      <footer className="p-5 text-center">
        <p className="text-center text-black py-5 font-semibold font-mono text-md md:text-lg">
          Web Waverz &copy; {year}. Crafting waves of innovation on the web.
        </p>
      </footer>
      </>
    );
  }
  