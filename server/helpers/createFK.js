export function createFK(queryInterface, fkTable, fkField, pkTable, pkField = 'id'){
	return queryInterface.addConstraint(
		fkTable,
		[ fkField ],
		{
			type: 'foreign key',
			references: {
				table: pkTable,
				field: pkField
			}
		}
	)
}
