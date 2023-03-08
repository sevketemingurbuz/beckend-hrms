import React from 'react'
import { Message, Icon, Grid, Input, Container, Button } from 'semantic-ui-react'
import { useFormik } from 'formik';
import validationSchema from '../validations/Validations'

export default function SignedUp() {

    const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            identification: '',
            password: '',
        },
        onSubmit: async (values, bag) => {
            await new Promise((r) => setTimeout(r, 1000))
            console.log(values)
            bag.resetForm()
        },
        validationSchema,
    });

    return (
        <div>
            <h1 style={{color: "grey"}}>Kayıt Ol</h1>

            <form onSubmit={handleSubmit}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <div>

                                <Input transparent
                                    id="firstName" name="firstName"
                                    placeholder='Ad'
                                    value={values.firstName}
                                    disabled={isSubmitting}
                                    onBlur={handleBlur('firstName')}
                                    onChange={handleChange("firstName")} />
                                {errors.firstName && touched.firstName && <div className='error-black'>{errors.firstName}</div>}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <div>
                                <Input transparent
                                    id="lastName" name="lastName"
                                    placeholder="Soyad"
                                    value={values.lastName}
                                    disabled={isSubmitting}
                                    onBlur={handleBlur('lastName')}
                                    onChange={handleChange("lastName")} />
                                {errors.lastName && touched.lastName && <div className='error-black'>{errors.lastName}</div>}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <div>
                                <Input transparent
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={values.email}
                                    disabled={isSubmitting}
                                    onBlur={handleBlur('email')}
                                    onChange={handleChange("email")}
                                />
                                {errors.email && touched.email && <div className='error-black'>{errors.email}</div>}
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5} >
                            <div >
                                <Input transparent
                                    id='identification'
                                    name='identification'
                                    placeholder='Kimlik Numarası'
                                    value={values.identification}
                                    disabled={isSubmitting}
                                    onBlur={handleBlur('identification')}
                                    onChange={handleChange("identification")}
                                />
                                {errors.identification && touched.identification && <div className='error-black'>{errors.identification}</div>}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5} >
                            <div >
                                <Input transparent
                                    id='date'
                                    name='date'
                                    placeholder='Doğum Tarihi'
                                    value={values.date}
                                    disabled={isSubmitting}
                                    onBlur={handleBlur('date')}
                                    onChange={handleChange("date")}
                                />
                                {errors.date && touched.date && <div className='error-black'>{errors.date}</div>}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5}  >
                            <div >
                                <Input transparent
                                    placeholder='Şifre'
                                    id='password'
                                    name='password'
                                    value={values.password}
                                    disabled={isSubmitting}
                                    onBlur={handleBlur('password')}
                                    onChange={handleChange("password")} />
                                    {errors.password && touched.password && <div className='error-black'>{errors.password}</div>}
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Container className='main'>
                      <Button basic Standard disabled={isSubmitting} type="submit">Kayıt</Button>
                      <Icon loading={isSubmitting} name='circle notched' style={{color: "grey"}} />
                </Container>

               
            </form>

            <Message icon>
                <Icon loading={isSubmitting} name='circle notched' />
                <Message.Content>
                    <Message.Header>Düşünüyorum öyleyse varım</Message.Header>
                    Bu ne biçim bi yangın bi tek ben tutuştum
                </Message.Content>
            </Message>
            <a href="ekmek-kapisi">Şirket Kaydı Oluşturmak için</a>
        </div>
    )
}
