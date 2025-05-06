import styled from 'styled-components';

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #333;

  html[data-theme='dark'] & {
    color: #fff;
  }
`;

const ContactDescription = ContactTitle;

export function ContactInfo({title, description, icon: Icon, iconProps}) {
  return (
    <ContactWrapper>
      {Icon && <Icon {...iconProps} />}
      <div>
        <ContactTitle>{title}</ContactTitle>
        <ContactDescription>{description}</ContactDescription>
      </div>
    </ContactWrapper>
  );
}
