<div id="editStudentModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden">
    <div class="bg-white rounded-lg p-6 w-96">
        <h2 class="text-lg font-semibold mb-4">Edit Student</h2>
        <form id="editStudentForm" method="POST">
            @csrf
            @method('PUT')
            <div class="mb-4">
                <label for="editName" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="editName" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
            </div>
            <div class="mb-4">
                <label for="editEmail" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="editEmail" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
            </div>
            <div class="mb-4">
                <label for="editPhone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" id="editPhone" name="phone" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
            </div>
            <div class="mb-4">
                <label for="editAddress" class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="editAddress" name="address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
            </div>
            <div class="flex justify-end">
                <button type="button" onclick="closeEditModal()" class="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
            </div>
        </form>
    </div>
</div>

<script>
    function openEditModal(id, name, email, phone, address) {
        const modal = document.getElementById('editStudentModal');
        const form = document.getElementById('editStudentForm');
        form.action = `/students/${id}`;
        document.getElementById('editName').value = name;
        document.getElementById('editEmail').value = email;
        document.getElementById('editPhone').value = phone;
        document.getElementById('editAddress').value = address;
        modal.classList.remove('hidden');
    }

    function closeEditModal() {
        const modal = document.getElementById('editStudentModal');
        modal.classList.add('hidden');
    }
</script>
