import React from 'react'
import PageAccueilSectionServiceStc from './PageAccueilSectionService.stc'
import {Container,Row,Col} from 'reactstrap';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import CardService from '../CardService';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import Bouton from '../../shared/Bouton';

function PageAccueilSectionService(props) {
    return (
        <PageAccueilSectionServiceStc className={props.className}>
            <Container>
                <Row>
                    <Col lg={5}></Col>
                    <Col lg={7}>
                        <Title className="py-2 py-md-3">
                           Nos services
                        </Title>
                        <Title niveau={1}>
                            Nous vous accompagnons dans tout vos projets
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Notre Equipe d'expert vous offres une gammes de services très variée.
                        </Texte>
                    </Col>
                </Row>
                <Row className="my-2 my-md-5">
                    <Col lg={4} className="px-0 px-md-4">
                        <CardService 
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                            Marketing digital
                            </Title> }
                            texte={
                                <p>
                                    Nous mettons en place votre Stratégie marketing 
                                    en vous Assurant ainsi une meilleure Rentabilité dans vos actions
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="px-0 px-md-4">
                        <CardService className="mt-0 mt-md-5"
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                            Marketing digital
                            </Title> }
                            texte={
                                <p>
                                    Nous mettons en place votre Stratégie marketing 
                                    en vous Assurant ainsi une meilleure Rentabilité dans vos actions
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                    <Col lg={4} className="mt-0 mt-md-5 px-0 px-md-4">
                        <CardService className="mt-0 mt-md-5"
                            icon={<AiOutlineFileSearch/>} 
                            title={ <Title niveau={5}>
                            Marketing digital
                            </Title> }
                            texte={
                                <p>
                                    Nous mettons en place votre Stratégie marketing 
                                    en vous Assurant ainsi une meilleure Rentabilité dans vos actions
                                </p>
                            }
                        bouton={
                            <Bouton className="btn my-md-3 my-2" >
                                <BsArrowRight />
                            </Bouton>
                        }
                        />
                    </Col>
                </Row>
            </Container>
        </PageAccueilSectionServiceStc>
    )
}

export default PageAccueilSectionService
