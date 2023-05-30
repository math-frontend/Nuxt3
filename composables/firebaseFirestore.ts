import { doc, getDoc, collection, query, limit, orderBy, getDocs, startAfter } from "firebase/firestore";

const firestore = () => {
  const { $firestore }:any = useNuxtApp()
  return $firestore
}

const getOneDoc = async (collectionName:string, uid:string) => {
  const docRef:any = doc(firestore(), collectionName, uid);
  const docSnap:any = await getDoc(docRef);

  let data:any
  let loading = true

  try {
    if (docSnap.exists()) {
      data = {
        uid: docSnap.id,
        doc: docSnap.data(),
        qtd: docSnap.data()?.length
      }
    } else {
      data = 'Nenhum documento encontrado.'
    }
  } catch (error) {
    data = `Ocorreu um erro ao obter documento`
  } finally {
    loading = false
  }


  return { data, loading }
}

const getMultipleDocs = async (collectionName: string) => {
  const q = query(collection(firestore(), collectionName));
  let data:any = []

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({
        uid: doc.id,
        doc: doc.data()
      })
    });
  } catch (error) {
    throw error
  }

  return { data }
}

const getFilteredDocs = async (collectionName:string, orderDocBy:string, numberOfDocs=30, lastVisibleDoc=0) => {
  const docQuery = query(collection(firestore(), collectionName), orderBy(orderDocBy), startAfter(lastVisibleDoc), limit(numberOfDocs));

  let data:any = []
  let lastVisible:any
  let loading = true

  try {
    const documentSnapshots = await getDocs(docQuery);
    lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];

    documentSnapshots.forEach((doc) => {
      data.push({
        uid: doc.id,
        doc: doc.data(),
        qtd: doc.data()?.length
      })
    });
  } catch {

  } finally {
    loading = false
  }

  return { data, lastVisible, loading }
}

const updateOneDoc = async (collection: string, uid: string, data:(unknown | {})) => {
  try {
    // --
  } catch (error) {
    // --
  } finally {
    // --
  }
}

const addOneDoc = async (collection: string, data:(unknown | {})) => {
  try {
    // --
  } catch (error) {
    // --
  } finally {
    // --
  }
}

const removeOneDoc = async (collection: string, uid: string) => {
  try {
    // --
  } catch (error) {
    // --
  } finally {
    // --
  }
}

export {
  getOneDoc,
  getMultipleDocs,
  getFilteredDocs,
  updateOneDoc,
  addOneDoc,
  removeOneDoc
}