import React from 'react'
import { useEffect, useState } from 'react'
import { Icon, Menu, Table, TableBody, TableCell, TableHeaderCell, TableRow } from 'semantic-ui-react'
import CvService from '../../services/cvService'
export default function Cv() {

    const [cvs, setCvs] = useState([])

    useEffect(() => {
        let cvService = new CvService()
        cvService.getAll().then(result => setCvs(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Table celled className='inside-table'>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.HeaderCell>Okul</Table.HeaderCell>
                                        <Table.HeaderCell>Bölüm</Table.HeaderCell>
                                        <Table.HeaderCell>Eğitim Seviyesi</Table.HeaderCell>
                                        <Table.HeaderCell>Başlangıç Yılı</Table.HeaderCell>
                                        <Table.HeaderCell>Bitiş Yılı</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <Table celled className='inside-table'>
                                <TableBody>
                                    <TableRow>
                                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                                        <Table.HeaderCell>Başlangıç Yılı</Table.HeaderCell>
                                        <Table.HeaderCell>Bitiş Yılı</Table.HeaderCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Table.HeaderCell>
                        <TableHeaderCell>
                            <Table celled className="inside-table">
                                <TableBody>
                                    <TableRow>
                                        <TableHeaderCell>Dil</TableHeaderCell>
                                        <TableHeaderCell>Seviye</TableHeaderCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        cvs.map(cv => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{cv.jobSeeker.name}</Table.Cell>
                                    <Table.Cell>{cv.jobSeeker.lastName}</Table.Cell>
                                    <Table.Cell>
                                        {
                                            cv.schools.length > 0
                                                ? <Table celled className='inside-table'>
                                                    <Table.Body>
                                                        {
                                                            cv.schools.map(school => {
                                                                return (
                                                                    <Table.Row>
                                                                        <Table.Cell>{school.schoolName}</Table.Cell>
                                                                        <Table.Cell>{school.department}</Table.Cell>
                                                                        <Table.Cell>{school.educationDegree}</Table.Cell>
                                                                        <Table.Cell>{school.startYear}</Table.Cell>
                                                                        <Table.Cell>{school.endYear}</Table.Cell>
                                                                    </Table.Row>
                                                                )
                                                            })
                                                        }
                                                    </Table.Body>
                                                </Table>

                                                : <center>Kayıt Bulunamadı</center>
                                        }
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Table celled className="inside-table">
                                            <Table.Body>
                                                {
                                                    cv.jobExperiences.map(jobExperience => (
                                                        <TableRow>
                                                            <TableCell>{jobExperience.workplaceName}</TableCell>
                                                            <TableCell>{jobExperience.jobPosition}</TableCell>
                                                            <TableCell>{jobExperience.startDate}</TableCell>
                                                            <TableCell>{jobExperience.endYear}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </Table.Body>
                                        </Table>
                                    </Table.Cell>
                                    <TableCell>
                                        <Table cell className='inside-table'>
                                            <TableBody>
                                                {
                                                    cv.languages.map (language => (
                                                        <TableRow>
                                                            <TableCell>{language.languageName}</TableCell>
                                                            <TableCell>{language.languageLevel}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableCell>
                                </Table.Row>
                            )
                        })
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
