import cupy as cp

# Vector Addition
def vector_add():
    size = int(input("Enter vector size: "))
    a = cp.array(list(map(int, input(f"Enter {size} elements for vector A: ").split())), dtype=cp.int32)
    b = cp.array(list(map(int, input(f"Enter {size} elements for vector B: ").split())), dtype=cp.int32)
    c = a + b  # GPU-based addition
    print("\nVector Addition Result:", cp.asnumpy(c))  # Convert to NumPy for display

# Matrix Multiplication
def matrix_multiplication():
    rowsA, colsA = map(int, input("Enter rows and cols of Matrix A: ").split())
    rowsB, colsB = map(int, input("Enter rows and cols of Matrix B: ").split())

    if colsA != rowsB:
        print("Matrix multiplication not possible. Columns of A must equal rows of B.")
        return

    print(f"Enter {rowsA * colsA} elements for Matrix A row-wise:")
    a = cp.array(list(map(int, input().split())), dtype=cp.int32).reshape(rowsA, colsA)
    
    print(f"Enter {rowsB * colsB} elements for Matrix B row-wise:")
    b = cp.array(list(map(int, input().split())), dtype=cp.int32).reshape(rowsB, colsB)

    c = cp.dot(a, b)  # GPU-based multiplication
    print("\nMatrix Multiplication Result:\n", cp.asnumpy(c))  # Convert to NumPy for display

def main():
    vector_add()
    matrix_multiplication()

if __name__ == "__main__":
    main()
