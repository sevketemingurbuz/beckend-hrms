import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import SchoolService from '../../services/schoolService'

export default function School() {

    const [schools, setSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService()
        schoolService.getAll().then(result => setSchools(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Okul</Table.HeaderCell>
                        <Table.HeaderCell>Eğitim Derecesi</Table.HeaderCell>
                        <Table.HeaderCell>Bölüm</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Cv Id</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        schools.map(school => (
                            <Table.Row >
                                <Table.Cell>{school.schoolName}</Table.Cell>
                                <Table.Cell>{school.educationDegree}</Table.Cell>
                                <Table.Cell>{school.department}</Table.Cell>
                                <Table.Cell>{school.startYear}</Table.Cell>
                                <Table.Cell>{school.endYear}</Table.Cell>
                                <Table.Cell>{school.cv?.cvId}</Table.Cell>
                            </Table.Row>
                        ))
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
