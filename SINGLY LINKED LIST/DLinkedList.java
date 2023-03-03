public class DLinkedList {
    class Node{
        int data;
        Node prev;
        Node next;

        Node(int data){
            this.data = data;
        }
    }

    public Node head = null;
    public Node tail = null;

    public void addNode(int data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
        }
        else{
            tail.next = newNode;
            newNode.prev = tail;
        }
        tail = newNode;
    }

    public void delete(int data){
        Node temp = head;
       
        
        if(temp != null && temp.data == data){
           head = temp.next;
           head.prev = null;
           return;
        }
        while(temp != null && temp.data != data){
           
            temp = temp.next;  
            
        }
        if(temp == tail){
            tail = temp.prev;
            tail.next = null;
            return;
        }
       
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        
        
    }

    public void insertAfter(int nextTo , int data){
        Node newnNode = new Node(data);
        Node temp = head;
        while( temp !=null && temp.data != nextTo){
            temp = temp.next;
        }
        newnNode.prev = temp.next.prev;
        temp.next.prev = newnNode;
        newnNode.next = temp.next;
        temp.next = newnNode;
        

    }

    public void display(){
        Node temp = head;
        
        while ( temp != null ){
            System.out.println(temp.prev+"  "+temp.data +"  "+temp.next);
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        DLinkedList list = new DLinkedList();
        list.addNode(20);
        list.addNode(40);
        list.addNode(60);
        list.addNode(80);
        list.addNode(100);

        list.insertAfter(60, 70);
       
        list.display();
    }
}
