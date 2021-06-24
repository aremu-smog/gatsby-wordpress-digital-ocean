import React from "react"
import PropTypes from "prop-types"
import Container from "../container"
import MainMenu from "../../layout/menu"

const PageHeader = ({ title = "", subheading = "" }) => {
  // You can customize this further, add new props, set conditions and so on and so forth. The sky is truly your limit
  return (
    <header className="bg-black pt-80 text-white pb-10">
      <Container>
        <>
          <MainMenu />
          <h1 className="font-serif text-7xl">{title}</h1>
          <p className="text-xl font-light">{subheading}</p>
        </>
      </Container>
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.any.isRequired,
  subheading: PropTypes.any,
}

export default PageHeader
