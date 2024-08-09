const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto text-center text-sm p-10 text-teal-600 border-t border-dashed border-teal-900">
      <p> &copy; {new Date().getFullYear()} React Todo App. Al rights reserved.</p>
    </footer>
  )
}

export default Footer;
