import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },

    header: {
        backgroundColor: '#0156A7',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    menuButton: {
        padding: 10,
    },

    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },

    headerIcon: {
        height: 30,
        width: 30,
    },

    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        borderRadius: 25,
        margin: 10,
        paddingHorizontal: 15,
    },

    searchInput: {
        flex: 1,
        height: 45,
        fontSize: 16,
        textAlign: 'center',
    },

    searchButton: {
        padding: 5,
    },

    body: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },

    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },

    featureItem: {
        alignItems: 'center',
    },

    featureLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 5,
    },

    buttonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
    },

    buttonIcon: {
        height: 30,
        width: 30,
        marginRight: 10,
    },

    buttonLabel: {
        fontSize: 16,
        fontWeight: '500',
    },

    packageSection: {
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
    },

    packageTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },

    packageOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    packageItem: {
        fontSize: 16,
        marginBottom: 10,
    },

    packageItemMargin: {
        marginTop: 14,
    },

    packageColumn: {
        marginLeft: 30,
    },
});
