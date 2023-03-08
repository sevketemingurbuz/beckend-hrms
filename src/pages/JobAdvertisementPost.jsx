import React from 'react'
import { Message, Icon, Grid } from 'semantic-ui-react'
import { useFormik } from 'formik';
import validationSchema from '../validations/Validations'

export default function JobAdvertisementPost() {
  const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        text: '',
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
        <h1>Kayıt Ol</h1>

        <form onSubmit={handleSubmit} className='sign-up'>
            <Grid>
                <Grid.Row>
                    <Grid.Column className='grid-sign-up' width={5}>
                        <div>
                            <label htmlFor="firstName">Ad</label>
                            <input id="firstName" name="firstName" placeholder="Şevket Emin"
                                value={values.firstName} disabled={isSubmitting} onBlur={handleBlur('firstName')} onChange={handleChange("firstName")} />
                            {errors.firstName && touched.firstName && <div className='error-red'>{errors.firstName}</div>}
                        </div>
                    </Grid.Column>
                    <Grid.Column className='grid-sign-up' width={5}>
                        <div>
                            <label htmlFor="lastName">Soyad</label>
                            <input id="lastName" name="lastName" placeholder="Gürbüz"
                                value={values.lastName} disabled={isSubmitting} onBlur={handleBlur('lastName')} onChange={handleChange("lastName")} />
                            {errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div>}
                        </div>
                    </Grid.Column>
                    <Grid.Column className='grid-sign-up' width={5}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="shevchenko@sevko.com"
                                type="email"
                                value={values.email}
                                disabled={isSubmitting}
                                onBlur={handleBlur('email')}
                                onChange={handleChange("email")}
                            />
                            {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className='grid-text'  >
                        <div >
                            <label htmlFor='text'>Metin</label>
                            <textarea
                                id='text'
                                name='text'
                                placeholder='metin...'
                                value={values.text}
                                disabled={isSubmitting}
                                onBlur={handleBlur('text')}
                                onChange={handleChange("text")}
                            />
                            {errors.text && touched.text && <div className='error-text'>{errors.text}</div>}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <button disabled={isSubmitting} type="submit">Kayıt</button>
            <Icon loading={isSubmitting} name='circle notched'  />
        </form>

        <Message icon>
            <Icon loading={isSubmitting} name='circle notched'  />
            <Message.Content>
                <Message.Header>Düşünüyorum öyleyse varım</Message.Header>
                Bu ne biçim bi yangın bi tek ben tutuştum
            </Message.Content>
        </Message>

    </div>
)
}
