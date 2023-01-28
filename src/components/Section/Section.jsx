import PropTypes from 'prop-types'
import { Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
}

Section.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};