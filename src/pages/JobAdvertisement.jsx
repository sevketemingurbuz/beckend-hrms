import React from 'react'
import { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisement() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllSorted().then(result=>setJobAdvertisements(result.data.data))

    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                        <Table.HeaderCell>Şirket</Table.HeaderCell>
                        <Table.HeaderCell>Açık Posizyon</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                    
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                
                            <Table.Row key={jobAdvertisement.jobAdvertisementId}>
                                <Table.Cell>{jobAdvertisement.jobAdvertisementName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDateTime}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
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