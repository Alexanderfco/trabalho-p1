import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#ed1c24', // Red background for navbar
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
   
    
  },
  antimg: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffff'
  },
  logo: {
    width: 100,
    height: 100,
    

  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff', // White background for content
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30
    
  },
  title2: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 30,
    
  },
  subtitle: {
    fontSize: 24,
    color: '#000000', 
    marginBottom: 20,
    fontWeight: 'bold'
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#ed1c24', // Red background for button
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White color for button text
    fontWeight: 'bold',
  },
   footer: {
    backgroundColor: '#ed1c24',
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingBottom: 20
  }
});