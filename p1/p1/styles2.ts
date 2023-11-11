import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#ed1c24', // Red background for navbar
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
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
    
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 50,
    
  },
  subtitle: {
    fontSize: 14,
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
    borderRadius: 30
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
});
