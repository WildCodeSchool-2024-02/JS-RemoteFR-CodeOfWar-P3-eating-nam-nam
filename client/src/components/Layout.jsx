import PropTypes from "prop-types";
import Navbar from "./Navbar";

export default function Layout({ className, children }) {
  return (
    <main className={className}>
      <Navbar />
      {children}
    </main>
  );
}

Layout.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
