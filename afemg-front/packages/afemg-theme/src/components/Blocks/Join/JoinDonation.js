import React from 'react'
import { styled } from "frontity";
import Link from "@frontity/components/link";

const JoinDonation = ({ page }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{page.acf.joinDonateTitle}</Title>
        <Subtitle>{page.acf.joinDonateSubtitle}</Subtitle>

        <Row>
          <BankContent>
            {page.acf.joinDonateAccounts.map((item, i) => (
              <Bank key={i}>
                <Text>{item.bank}</Text>
                <Text>{item.agency}</Text>
                <Text>{item.number}</Text>
              </Bank>
            ))}
          </BankContent>
        </Row>
        <Row>
          <Content>
            <Textarea dangerouslySetInnerHTML={{__html: page.acf.joinDonatePix}} />
          </Content>
        </Row>
        <Row>
          <Content>
            <Text>{page.acf.joinDonateVaquinha}</Text>
            <Link link='/'>Quero Doar</Link>
          </Content>
        </Row>
        <Row>
          <Content>
            <Text>{page.acf.joinDonateMaterials}</Text>
            <Link link='/'>Lista</Link>
          </Content>
        </Row>
      </Container>
    </Wrapper>
  );
}
 
export default JoinDonation;

const Wrapper = styled.section`
  background-color: #eeeeee;
  padding: 6rem 1rem;
  color: #ffffff;
  align-items: flex-start !important;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 720px) {
    margin-left: 10vw;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: center;
  color: #1f3452;
  margin: 0 1rem;
`

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  line-height: 25px;
  margin: 0 1rem 3rem;
  color: #1f3452;
`

const Bank = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin-right: 2rem !important;
  }
`

const Text = styled.p`
  color: #1f3452;
  font-size: 1.4rem;
  margin: 0 1rem !important;
`

const Textarea = styled.div`
  color: #1f3452;
  font-size: 1.4rem;
  margin: 0 1rem !important;
`


const Row = styled.div`

`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  > a {
    padding: 10px 25px;
    color: #ffffff;
    background-color: #fab03b;
    text-decoration: none;
    border-radius: 25px;
    width: 180px;
    text-align: center;
    margin: 0.5rem 1rem;

    :hover {
      filter: brightness(70%);
    }
  }
`

const BankContent = styled.div`
  display: flex;
  margin: 1rem 0;
`