import React from "react"
import PropTypes from "prop-types"

const Container = ({ children }) => {
  return (
    <section className="max-w-screen-lg  mx-auto md:px-0 px-6">
      {children}
    </section>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
