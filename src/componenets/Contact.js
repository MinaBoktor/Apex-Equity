import { useState, useRef, useEffect } from "react";
import {useToast, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton, Input, InputGroup, Button, Text, InputRightElement, InputLeftAddon, InputLeftElement, FormErrorMessage, FormControl, Center} from '@chakra-ui/react';


const Contact = () => {
    const [first, setFirst] = useState({
        value:'',
        isTouched:false
    })
    const [last, setLast] = useState({
        value:'',
        isTouched:false
    })
    const [phone, setPhone] = useState({
        value:'',
        isTouched:false
    })
    const [email, setEmail] = useState({
        value:'',
        isTouched:false
    })
    const [money, setMoney] = useState({
        value:5000,
        isTouched:false
    })

    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (first.value == '' || phone.value == '' || email.value == '') {
            setFirst({isTouched:true})
            setEmail({isTouched:true})
            setPhone({isTouched:true})
            return false
        }
        else {
        setIsOpen(true)
        return true
        }
    }

    const handleAlert = () => {
        setFirst({value:''})
        setLast({value:''})
        setEmail({value:''})
        setMoney({value:5000})
        setPhone({value:''})
        onClose()
        toast({
            title: 'Your Plan is Ready',
            description: "Check your email to get the plan",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        return true
    }

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {setIsOpen(false)}

    const cancelRef = useRef()


    return(
        <>
        <footer>
            <div><h1>Grow your Wealth with Stratgic Investments</h1></div>
            <div id='#formdiv'>
                <form onSubmit={handleSubmit}>
                    <h2 style={{textAlign:'center', paddingBottom:'1rem', fontSize:30, fontWeight:'bold'}}>Contact us</h2>
                    <section id="contact">
                        <FormControl width={300} margin={2} isInvalid={first.isTouched && first.value == ''}>
                            <Input
                                required
                                errorBorderColor='red.300'
                                placeholder='First Name'
                                value={first.value}
                                onChange={(e) => {setFirst({value:e.target.value})}}
                                onBlur={() => {setFirst({...first, isTouched:true})}}
                            />
                            {(first.isTouched && first.value == '') &&(
                                <FormErrorMessage>First Name is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <Input
                            width={300}
                            margin={2}
                            placeholder='Last Name'
                            value={last.value}
                            onChange={(e) => {setLast({value:e.target.value})}}
                        />
                    </section>
                    <section>
                        <FormControl width={300} margin={2} isInvalid={email.isTouched && email.value == ''}>
                            <Input
                                type="email"
                                required
                                errorBorderColor='red.300'
                                placeholder='Email'
                                value={email.value}
                                onChange={(e) => {setEmail({value:e.target.value})}}
                                onBlur={() => {setEmail({...email, isTouched:true})}}
                            />
                            {(email.isTouched && email.value == '') &&(
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl width={300} margin={2} isInvalid={phone.isTouched && phone.value == ''}>
                            <InputGroup>
                                <InputLeftAddon pointerEvents='none'>
                                    +20
                                </InputLeftAddon>
                                <Input required type='tel' value={phone.value} onBlur={() => {setPhone({...phone, isTouched:true})}} onChange={(e) => {if (e.target.value.match(/^([0-9]+)?$/)){setPhone({value:e.target.value})}}} placeholder='Phone number' />
                            </InputGroup>
                            {(phone.isTouched && phone.value == '') &&(
                                <FormErrorMessage>Phone Number is required.</FormErrorMessage>
                            )}
                        </FormControl>
                    </section>
                    <section style={{flexDirection:'column'}}>
                        <h3 style={{textAlign:'center', fontWeight:500}}>Your Starting Investment</h3>
                        <section style={{flexDirection:'row'}}>
                            <input id="range" style={{width:300, margin:7}} type="range" min="1" max="100000" value={money.value} onChange={(e) => {setMoney({value:e.target.value})}}></input>
                            <InputGroup width={160} margin={2}>
                                <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                                />
                                <Input placeholder='Enter amount' value={money.value} onChange={(e) => {if (e.target.value > 0 && e.target.value <= 100000) {setMoney({value:e.target.value})}}} />
                            </InputGroup>
                        </section>
                    </section>
                    <section>
                        <Button colorScheme='teal' width={56} height={55} ml={3}><input type="submit" style={{width:300, height:60, backgroundColor:'rgb(0,0,0,0)', fontWeight:"bold"}} value="Get your investment plan"></input></Button>
                    </section>
                </form>
            </div>
        </footer>
        <div>
            <AlertDialog
                            motionPreset='slideInBottom'
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                            isCentered
                        >
                            <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    Double check your data
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    <p>First Name: {first.value}</p>
                                    <p>Last Name: {last.value}</p>
                                    <p>Email: {email.value}</p>
                                    <p>Phone Number: {phone.value}</p>
                                    <p>Starting Investment: ${money.value}</p>
                                </AlertDialogBody>

                                <AlertDialogFooter background='white' borderRadius={10}>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='teal' onClick={handleAlert} ml={3}>
                                    Confirm
                                </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialogOverlay>
                    </AlertDialog>
        </div>
    </>
    )
}

export default Contact;